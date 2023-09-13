export default defineEventHandler(async (event) => {
    // return {};
    // const paramsarray = [...event.node.req.url.split("=")];
    // console.log(paramsarray);
    // // console.log(paramsarray.pop());
    const id=[...event.node.req.url.split("=")].pop();
    // console.log("inside search:  ", id);

    const config = useRuntimeConfig();
    // console.log(config.apikey);
    // console.log(`Bearer ${config.apikey}`);
    console.log(`${config.apiBaseUrl}/movie/${id}?api_key=${config.apikey}`)
    console.log('above');
    const { data , error } = await $fetch(`${config.apiBaseUrl}/movie/${id}?api_key=${config.apikey}`);
    console.log('after');
    console.log("data ",data);
    console.log("error ",error);
    return data;
    // return $fetch(`${config.apiBaseUrl}/movie/${id}?api_key=${config.apikey}`, {
    //     method: 'GET',
    //     headers: {
    //         "Authorization": `Bearer ${config.apikey}`
    //     }
    // }) 
}

)