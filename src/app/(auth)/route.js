import NextAuth from "next-auth/next";

export const authOption = {
    providers: [
        Providers.Credentials({
            authorize: async (credentials, userId, password, database) => {
                const formData = new FormData();

                formData.append('userId', userId);
                formData.append('password', password);
                formData.append('database')

                const resposta = await fetch('https://acl-hmg.prod.unitri.edu.br/login', {
                    method: 'POST',
                    body: formData,
                });
                
                const usuarios = await resposta.json();
                  
                const usuarioAutenticado = usuarios.find(
                    (usuario) =>
                        usuario.userId === credentials.userId &&
                        usuario.password === credentials.password
                );
                
                if (usuarioAutenticado) {
                    return Promise.resolve(usuarioAutenticado);
                } else {
                    return Promise.resolve(null);
                }
            }
        })
    ],
    pages: {
        login: '/login'
    }
} 

const handler = NextAuth(authOption)

export { handler as GET, handler as POST };