import axios from 'axios';
import { useState, useEffect } from 'react';
import { OpenAI, OpenAIApi, Configuration} from "openai";

const Product = () => {
  const openai = new OpenAI({apiKey: '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', dangerouslyAllowBrowser: true});
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const prompt = "What are the detailed features of " + params.get('product')

  useEffect(async()=>{
    setLoading(true);
    try {
      const result = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a techy salesman who knows everything about laptops and you always output in json" },
        { role: "user", content: prompt }],
          model: "gpt-3.5-turbo-1106",
          response_format:{ "type": "json_object" },
          temperature: 0.1
      }).then((res) => {
        console.log(res);  
        setApiResponse(res.choices[0].message.content);
      });
      
      
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [])
  return (
    <>
      <div
      >
        <h1>{params.get('product')}</h1>
        <form >
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <strong>API response:</strong>
            {apiResponse}
          </div>
        </div>
      )}
    </>
  );
};


export default Product;












// function Product(){
//   const openai = new OpenAI({
//     apiKey: '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', dangerouslyAllowBrowser: true
// });
//   const chatCompletion = async() => await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
// }).then((res) => {
//   console.log(res)
// });
//   const searchParams = new URLSearchParams(window.location.search);
//     let model = searchParams.get('product')
//   // const prompt = "Give me keyfeaures of dell latitude 7410 in json format"
  
//   //   const test =  openai.createCompletion({
//   //     model: "text-davinci-003",
//   //     prompt: prompt,
//   //     temperature: 0.5,
//   //     max_tokens: 4000,
//   //   });
//   //   console.log("response", result.data.choices[0].text);
//     return (<>
//     <h1>{model}</h1>
//     </>)
// }

// export default Product
