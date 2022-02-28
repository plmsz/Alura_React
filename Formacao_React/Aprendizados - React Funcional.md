# Novo:
Helpertext
const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
utilizar contexto e hooks personalizados para não repetir funções

Navigate envia para página 404 ou:

<code> 

    useEffect(() => {
        buscaFoto(setSrc);
        busca(`/posts/${id}`, setPost).catch(() => {
         navigate("/404");
        });
        }, [id]);
    }
</code>
# Ideias:
- viaCEP e validações
- adiconar outros inputs, ex: tipo date => data de nascimento 

