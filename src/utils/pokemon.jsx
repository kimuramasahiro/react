
//20種類のポケモンデータ取得
export const getAllPokemon=(url)=>{
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>resolve(data));
    });
};

//詳細なポケモンデータを取得
export const getPokemon=(url)=>{
    return new Promise((resolve,reject)=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>{
            //console.log(data);
            resolve(data);
        })
    })
};