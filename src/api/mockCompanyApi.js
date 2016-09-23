import delay from './delay';

const companies = [
  {
    id: 'dc-comics',
    name: 'DC Comics'
  },
  {
    id: 'marvel',
    name: 'Marvel'
  }
];

class CompanyApi {
  static getAllCompanies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], companies));
      }, delay);
    });
  }
}

export default CompanyApi;
