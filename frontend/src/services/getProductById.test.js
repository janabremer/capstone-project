import getProductById from './getProductById'

describe('getProductById', () => {
    it('returns a product object with id, name and virtualWater', async () => {
  
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({id: 2, name: "tomatoes", virtualWater: 214}),
        })
      )
      const result = await getProductById(2)
      expect(result).toEqual({id: 2, name: "tomatoes", virtualWater: 214})
      expect(fetch).toBeCalledWith(expect.stringMatching(/2/))
      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })