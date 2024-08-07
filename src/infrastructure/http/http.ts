
const headers = {
  'Content-Type': 'application/json'
}

const post = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body
  })
  return await response.json() as T
}

const http = {
  post
}

export default http