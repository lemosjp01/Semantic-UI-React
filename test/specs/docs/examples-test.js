import { createElement } from 'react'
import { exampleContext } from 'docs/src/utils'

describe('examples', () => {
  exampleContext.keys().forEach((path) => {
    // don't test index files, they repeat errors of individual files
    if (/index\.js$/.test(path)) return
    const filename = path.replace(/^.*\/(\w+\.js)$/, '$1')

    it(`${filename} renders without console activity`, () => {
      // TODO also render the example's path in a <ComponentExample /> just as the docs do
      const wrapper = mount(createElement(exampleContext(path).default))

      wrapper.unmount()
    })
  })
})
