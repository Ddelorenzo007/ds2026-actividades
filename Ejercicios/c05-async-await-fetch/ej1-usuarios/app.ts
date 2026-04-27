export{}

interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obetenerUsuarios(): Promise<Usuario[]> {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
        }
        const usuarios: Usuario[] = await response.json();
        return usuarios;
    } catch(error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
}

const usuarios = await obetenerUsuarios();
usuarios.forEach(u => console.log(`${u.name} - ${u.email}`));