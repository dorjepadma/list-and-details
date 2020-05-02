import { fetchCharacters } from './Airbender.jsx';

describe('airbender api', () => {
  it('fetch a list of airbender characters', () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({
        result: [
          {
            name: 'random Airbender 1',
            description: 'Airbender description',
            image: 'https://air-bender.png'
          },
          {
            name: 'random Airbender 2',
            description: 'Airbender description',
            image: 'https://air-bender.png'
          }
        ]
      })
    });

    return fetchCharacters()
      .then(characters => {
        expect(characters).toEqual([
          {
            name: 'random Airbender 1',
            description: 'Airbender description',
            image: 'https://air-bender.png'
          },
          {
            name: 'test character 2',
            description: 'my character',
            image: 'https://www.fillmurray.com/640/360'
          }
        ]);
      });
  });
});
