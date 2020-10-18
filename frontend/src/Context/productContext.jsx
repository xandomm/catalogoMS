import React,{createContext, useState,useContext} from 'react';




const ProdutosContext = createContext()

export default function ProdutosProvider({children}) {
   const [carrinho, setCarrinho] = useState([]);
   
    return(
        <ProdutosContext.Provider value={{
            carrinho,
            setCarrinho
        }}>


            {children}



        </ProdutosContext.Provider>
    )
};
export function useProdutos(){
    const context = useContext(ProdutosContext);
    const {carrinho, setCarrinho}= context;
    return  {carrinho, setCarrinho}
}