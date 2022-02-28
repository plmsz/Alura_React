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

Rotas

    <Route path="/categorias" element={<Categorias />} 

    <Route path="categorias" element={<Categorias />} />
    
A diferença é apenas uma / no início do path, mas isso significa MUITO. Com a barra, dizemos que queremos "resetar" nossa rota e começar do root das rotas, ou seja, de /. Já sem a barra, significa que queremos a rota relativa ao que temos agora, ou seja, se estamos em /banana, ele iria para /banana/categorias e não para /categorias, sacou?


# Ideias:
Formulario
- viaCEP e validações
- adiconar outros inputs, ex: tipo date => data de nascimento 

PetShop:
- Cadastro
- Login (rota protegida)
- Página de compra de Produtos 
