export const fetchJobs = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({
      "limit": 10,
      "offset": 0
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
  
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch jobs: ' + error.message);
    }
  };
  