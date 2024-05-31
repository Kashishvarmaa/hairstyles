export default defineEventHandler(async (event) => {
  const { image, hairstyle, shade, color } = await readBody(event)

  // Using public model
  const endpoint = 'https://api.replicate.com/v1/predictions'

  // Create prediction
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + useRuntimeConfig().replicateApiToken
      },
      body: JSON.stringify({
        version:
          'b95cb2a16763bea87ed7ed851d5a3ab2f4655e94bcfb871edba029d4814fa587',
        input: {
          image,
          editing_type: 'both',
          hairstyle_description: hairstyle,
          color_description: `${shade} ${color}`
        }
      })
    })
    const json = await response.json()

    // Parse prediction
    const id = json.id
    const status = json.status
    const output = json.output

    return { id, status, output }
  } 
  catch (e) {
    console.log('ERROR', e)
  }
})
function useRuntimeConfig() {
  throw new Error("Function not implemented.")
}

function readBody(event: any): { image: any; hairstyle: any; shade: any; color: any } | PromiseLike<{ image: any; hairstyle: any; shade: any; color: any }> {
  throw new Error("Function not implemented.")
}

function defineEventHandler(arg0: (event: any) => Promise<{ id: any; status: any; output: any }>) {
  throw new Error("Function not implemented.")
}

