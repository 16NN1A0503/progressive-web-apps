function  loadJson(file){
	return new Promise((resolve,reject)=>{
        return fetch(file).then (res=>{
        	if(res.ok){
        		resolve(res.json());
        	}
        	else
        	{
        		reject(new Error('error'));
        	}
        	

        })
	})
}
var fetchedData=loadJson("data.json");
fetchedData.then(data=>{
	console.log(data);
})