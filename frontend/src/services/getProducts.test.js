import getProducts from './getProducts'

describe('getProducts', () => {
    it('returns an array of products', async () => {
  
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([{"id":1,"name":"beer","virtualWater":298},{"id":2,"name":"tomatoes","virtualWater":214}]),
        })
      )
      const result = await getProducts()
      expect(result).toEqual([{"id":1,"name":"beer","virtualWater":298},{"id":2,"name":"tomatoes","virtualWater":214}])
      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })