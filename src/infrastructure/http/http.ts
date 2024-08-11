
const headers = {
  'Content-Type': 'application/json'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const post = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
  if (response){
    return await response.json() as T
  }
  return null
}

const http = {
  post
}

export default http