async function postSignup(inputs) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;

    try{
        const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: inputs.username,
            password: inputs.password,
            first_name: inputs.first_name,
            last_name: inputs.last_name,
            email: inputs.email,
            user_type: "Organisation",
            organisation: {
                name: inputs.name,
                logo: inputs.logo,
                website: inputs.website,
                description: inputs.description
            }
        })
        });
    
        if (!response.ok) {
            // throw Error(`Error: ${response.statusText}`);
        }
    
        const result = await response.json();
        return result;
    }   catch (error) {
        console.error("Error:", error);
        throw error;
    }}
    export default postSignup;