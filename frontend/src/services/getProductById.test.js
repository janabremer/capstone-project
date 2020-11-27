import getProductById from './getProductById'

describe('getProductById', () => {
    it('returns a product object with id, name and virtualWater', async () => {
     //expect.assertions(1)
  
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({id: 2, name: "tomatoes", virtualWater: 214}),
        })
      )
      const result = await getProductById(2)
      //expect(result).toHaveLength(3)
      expect(result).toEqual({id: 2, name: "tomatoes", virtualWater: 214})
      expect(fetch).toBeCalledWith(expect.stringMatching(/2/))
      expect(fetch).toHaveBeenCalledTimes(1)
    })
    // it('throws an error', async => {
    //     fetch.mockImplementationOnce(() => Promise.reject('API failure'))
    //     const result = await getProductById(2)
    //     expect(result).rejects.toThrowError
    // })
  })