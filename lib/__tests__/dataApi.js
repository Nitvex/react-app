import dataApi from '../dataApi';
import {data} from '../testData.json';

const api = new dataApi(data);

describe('dataApi', () => {

  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const {id, title} = data.articles[0];

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });

  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const {id, firstName} = data.authors[0];

    expect(authors).toHaveProperty(id);
    expect(authors[id].firstName).toBe(firstName);
  });
});