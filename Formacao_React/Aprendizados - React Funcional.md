# Novo:

## Helpertext
const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
utilizar contexto e hooks personalizados para não repetir funções

## Rotas
- Navigate envia para página 404 ou:

<code> 

    useEffect(() => {
        buscaFoto(setSrc);
        busca(`/posts/${id}`, setPost).catch(() => {
         navigate("/404");
        });
        }, [id]);
    }
</code>

    
- A diferença é apenas uma / no início do path, mas isso significa MUITO. Com a barra, dizemos que queremos "resetar" nossa rota e começar do root das rotas, ou seja, de /. Já sem a barra, significa que queremos a rota relativa ao que temos agora, ou seja, se estamos em /banana, ele iria para /banana/categorias e não para /categorias, sacou?

<code>

    <Route path="/categorias" element={<Categorias />} />
    <Route path="categorias" element={<Categorias />} />
</code>

- An index route is that it's the default child route when the parent matches but none of its children do.
Depending on the user interface, you might not need an index route, but if there is any sort of persistent navigation in the parent route you'll most likely want index route to fill the space when the user hasn't clicked one of the items yet.

<code>

    <Routes>
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path=":teamId/edit" element={<EditTeam />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
        </Route>
    </Route>
    <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
    </Route>
    <Route path="contact-us" element={<Contact />} />
    </Routes>
</code>

# Ideias:
Formulario
- viaCEP e validações
- adiconar outros inputs, ex: tipo date => data de nascimento 

PetShop:
- Cadastro
- Login (rota protegida)
- Página de compra de Produtos 
