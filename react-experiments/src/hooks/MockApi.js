const employees = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
  { id: 3, name: 'test3' },
  { id: 4, name: 'test4' },
]

export const get = () => new Promise((resolve, reject) => {
  setTimeout(resolve(employees), 1000)
})

