class dataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  }

  notify = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  }

  mergeWithState = data => {
    Object.assign(this.data, data);
    this.notify();
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }
  
  lookupAuthor = authorId => {
    return this.data.authors[authorId];
  }   

  getState = () =>  {
    return this.data;
  }

  setSearchTerm = searchTerm => {
    this.mergeWithState({searchTerm});
  }

  startClock = () => {
    setInterval(() => this.mergeWithState({timestamp: new Date()}), 1000);
  }
}

export default dataApi;