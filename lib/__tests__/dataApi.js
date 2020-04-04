import dataApi from '../dataApi';
import {data} from '../testData.json';

const store = new dataApi(data);

describe('dataApi', () => {

  it('exposes articles as an object', () => {
    const articles = store.getState().articles;
    const {id, title} = data.articles[0];

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });

  it('exposes authors as an object', () => {
    const authors = store.getState().authors;
    const {id, firstName} = data.authors[0];

    expect(authors).toHaveProperty(id);
    expect(authors[id].firstName).toBe(firstName);
  });
});