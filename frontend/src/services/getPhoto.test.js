import getPhoto from './getPhoto'

describe('getPhoto', () => {
    it('returns a photo object for the queryParam', async () => {
  
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
                "page": 1,
                "per_page": 1,
                "photos": [],
                "total_results": 1000,
                "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=tomatoes"
            }),
        })
      )
      const result = await getPhoto('tomatoes')
      expect(result).toEqual({
        "page": 1,
        "per_page": 1,
        "photos": [],
        "total_results": 1000,
        "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=tomatoes"
        })
      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })