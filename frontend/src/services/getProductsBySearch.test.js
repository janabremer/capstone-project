import getProductsBySearch from './getProductsBySearch'

describe('getProductsBySearch', () => {
    it('returns an array of product objects with id, name and virtualWater', async () => {
  
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([{id: 2, name: "/potato/", virtualWater: 214}]),
        })
      )
      const result = await getProductsBySearch('potato')
      expect(result).toEqual([{id: 2, name: "/potato/", virtualWater: 214}])
      expect(fetch).toBeCalledWith(expect.stringMatching('potato'))
      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })