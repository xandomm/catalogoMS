import React,{createContext, useState,useContext} from 'react';




const ProdutosContext = createContext()

export default function ProdutosProvider({children}) {
   const [carrinho1, setCarrinho1] = useState([]);
   
    return(
        <ProdutosContext.Provider value={{
            carrinho1,
            setCarrinho1
        }}>


            {children}



        </ProdutosContext.Provider>
    )
};
export function useProdutos(){
    const context = useContext(ProdutosContext);
    const {carrinho1, setCarrinho1}= context;
    return  {carrinho1, setCarrinho1}
}