async function getUserAsync() 
{
        let response = await fetch(`https://www.matthieu-sibert.ltd/CV/cv.json`)
        let data = await response.json()
        return data
        

}
let data = getUserAsync()

export const Resume = (state = data, action) => {
        return state
}