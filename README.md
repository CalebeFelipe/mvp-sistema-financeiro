# MVP Sistema Financeiro

Projeto de estudos para praticar desenvolvimento full-stack com foco em aprendizado colaborativo.

## 🚀 Como rodar

### Pré-requisitos
- Node.js 18+ 
- Java 17+
- Maven

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Acesse: http://localhost:5173

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```
Acesse: http://localhost:8080

## 🛠️ Tecnologias

### Frontend
- **React 18** com TypeScript
- **Vite** (build tool)
- **React Router Dom** (navegação)
- **Axios** (HTTP client)
- **React Hook Form** (formulários)

### Backend
- **Java 17**
- **Spring Boot 3**
- **Spring Security** (autenticação)
- **Spring Data JPA** (persistência)
- **H2** (desenvolvimento)
- **PostgreSQL** (produção)

### Ferramentas
- **GitHub** (versionamento)
- **Trello** (gestão de tasks)

## 👥 Colaboradores

- **Frontend:** Calebe Felipe
- **Backend:** Guilherme Ribeiro

## 📋 Funcionalidades do MVP

- [x] Setup inicial dos ambientes
- [ ] Autenticação (login/cadastro)
- [ ] Dashboard com saldo atual
- [ ] Cadastro de receitas e despesas
- [ ] Lista de transações
- [ ] Relatório mensal básico

## 🔄 Workflow de Desenvolvimento

### Estrutura de Branches
```
main                    # Produção (protegida)
├── develop            # Desenvolvimento principal
├── frontend/feature   # Features do frontend
└── backend/feature    # Features do backend
```

### Comandos Essenciais
```bash
# Começar nova feature
git checkout develop
git pull origin develop
git checkout -b frontend/nome-da-feature

# Finalizar feature
git add .
git commit -m "feat: descrição da feature"
git push origin frontend/nome-da-feature
# Abrir PR no GitHub: sua-branch → develop
```

## 📝 Scripts Disponíveis

### Frontend
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção  
npm run preview      # Preview do build
npm run lint         # ESLint
```

### Backend
```bash
./mvnw spring-boot:run    # Rodar aplicação
./mvnw test              # Executar testes
./mvnw clean install     # Build completo
```

## 🗂️ Estrutura do Projeto

```
mvp-sistema-financeiro/
├── frontend/
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # APIs e serviços
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Funções utilitárias
│   │   └── types/         # Tipos TypeScript
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/main/java/
│   │   └── com/finance/
│   │       ├── controller/    # REST Controllers
│   │       ├── service/       # Lógica de negócio
│   │       ├── repository/    # Acesso a dados
│   │       ├── model/         # Entidades
│   │       └── config/        # Configurações
│   └── pom.xml
└── docs/                  # Documentação
```

## 🚀 Deploy

### Frontend
- **Vercel** ou **Netlify** (conectado ao GitHub)
- Build automático na branch `main`

### Backend  
- **Railway** ou **Render** (free tier)
- Variáveis de ambiente configuradas

### Banco de Dados
- **ElephantSQL** (PostgreSQL gratuito)

## ✅ Checklist Diário

### 🌅 Antes de Começar o Dia
- [ ] `git checkout develop`
- [ ] `git pull origin develop`
- [ ] Verificar se tem PR para revisar
- [ ] Atualizar cards no Trello

### 🌆 Antes de Parar o Dia  
- [ ] Commitar progresso (mesmo que WIP)
- [ ] Push da branch atual
- [ ] Atualizar progresso no Trello
- [ ] Comunicar bloqueios ou dúvidas

### 📋 Antes de Abrir PR
- [ ] Testar funcionalidade localmente
- [ ] Verificar se não quebrou funcionalidades existentes
- [ ] Executar `npm run build` (frontend) ou testes (backend)
- [ ] Escrever descrição clara do PR
- [ ] Adicionar screenshots se for UI
- [ ] Marcar o colega para review

## 🐛 Troubleshooting

### Frontend não inicia
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erro de CORS
- Verificar se backend está rodando na porta 8080
- Confirmar configuração de CORS no Spring Boot

### Conflitos no Git
```bash
git checkout develop
git pull origin develop
git checkout sua-branch
git merge develop
# Resolver conflitos manualmente
git commit -m "fix: resolve conflitos com develop"
```

## 🎯 Próximos Passos

1. **Setup completo** dos ambientes
2. **Definir API contracts** entre front e back
3. **Implementar autenticação** básica
4. **Criar primeira feature** colaborativa
5. **Configurar deploy** automatizado

---

**💡 Dica:** Esse projeto é mais sobre aprender a trabalhar em equipe do que sobre o código em si.

**📞 Canais de Comunicação:**
- Issues do GitHub para bugs
- WhatsApp/Discord para alinhamentos rápidos
- Comentários no Trello para updates de progresso