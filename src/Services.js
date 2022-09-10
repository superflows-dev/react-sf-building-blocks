async function getCountryCodes() {

    const response = await fetch('https://superflows-myuploads.s3.ap-south-1.amazonaws.com/countries_dialcodes_flags.json');
    return await response.json();

}


const exportFunctions = {
    getCountryCodes
};

export default exportFunctions;

