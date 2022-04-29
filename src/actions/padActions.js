import axios from "axios";
import Web3 from "web3";

import {
  GET_PADS,
  GET_PAD,
  PAD_LOADING,
} from "./types";

export const getPads = () => dispatch => {
    dispatch(setPadLoading());

    let padData = {
        title: "",
        symbol: "",
        rate: "",
        softCap: "",
        hardCap: "",
        minBuy: "",
        maxBuy: "",
        from: "",
        to: ""
    };

    let pads = [];
    
    axios.get("http://localhost:3001/api/getAll")
    .then( res1 => {
        const orders = res1.data;
        const orderedItemNames = orders
                              .filter(order => order.launchpad != null)
                              .filter(order => order.chainID == "97")   //only show BSC
                              .map(order => order.launchpad);

        const listSize = orderedItemNames.length;

        const func1 = async(size) =>{
            const contractData = await axios.get("http://localhost:3001/api/getPresaleContract");
            const abi = contractData.data.abi;
            const web3 = new Web3(Web3.givenProvider);
            for(let i=0;i<size;i++){
                const presaleContract = new web3.eth.Contract(abi, orderedItemNames[i]);
                const tokenInfo = await presaleContract.methods.tokeninfo().call();
                padData.title = tokenInfo.name;
                padData.symbol = tokenInfo.symbol;
                const presaleInfo = await presaleContract.methods.presale_info().call();
                const from1 = (new Date(Number(presaleInfo.presale_start))).toLocaleString(); //2019-12-9 10:30:15
                const to1 = (new Date(Number(presaleInfo.presale_end))).toLocaleString(); //2019-12-9 10:30:15
                padData.rate = presaleInfo.token_rate;
                padData.softCap = presaleInfo.softcap;
                padData.hardCap = presaleInfo.hardcap;
                padData.minBuy = presaleInfo.raise_min;
                padData.maxBuy = presaleInfo.raise_max;
                padData.from = from1;
                padData.to = to1;

                pads[i] = Object.assign({}, padData);
            }
            console.log(pads);
            dispatch({
                type: GET_PADS,
                payload: pads
            });

        }

        func1(listSize);

        
        // axios.get("http://localhost:3001/api/getPresaleContract")
        //     .then( (res) => {
        //         orderedItemNames.forEach((launchpad, key) => { 

        //             const abi = res.data.abi;
        //             const web3 = new Web3(Web3.givenProvider);
        //             const presaleContract = new web3.eth.Contract(abi, launchpad);
                    
        //             presaleContract.methods.tokeninfo().call().then(res=>{
        //                 console.log(res);
        //                 padData.title = res.name;
        //                 padData.symbol = res.symbol;

        //                 presaleContract.methods.presale_info().call().then(res=>{
        //                     const from1 = (new Date(Number(res.presale_start))).toLocaleString(); //2019-12-9 10:30:15
        //                     const to1 = (new Date(Number(res.presale_end))).toLocaleString(); //2019-12-9 10:30:15
        //                     padData.rate = res.token_rate;
        //                     padData.softCap = res.softcap;
        //                     padData.hardCap = res.hardcap;
        //                     padData.minBuy = res.raise_min;
        //                     padData.maxBuy = res.raise_max;
        //                     padData.from = from1;
        //                     padData.to = to1;
    
        //                     console.log("key---------");
        //                     console.log(key);
        //                     console.log("data---------");
        //                     console.log(padData)
                            
        //                     pads[key] = padData;
        //                     // console.log(pads[key]);
    
        //                     if(pads.length == listSize){
        //                         console.log("output-----------");
        //                         console.log(pads);
        //                         dispatch({
        //                             type: GET_PADS,
        //                             payload: pads
        //                         })
        //                     }
    
        //                 }).catch(err=>console.log(err));
        //             }).catch(err=>console.log(err));

                    

        //         });  

        // }).catch(err=>console.log(err));  
           
        
    }).catch(err => dispatch({
            type: GET_PADS,
            payload: null
        })
      );  

};

export const getPad = id => dispatch => {
  dispatch(setPadLoading());

  axios
    .get(`http://localhost:3000/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_PAD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PAD,
        payload: null
      })
    );
};


export const setPadLoading = () => {
  return {
    type: PAD_LOADING
  };
};
