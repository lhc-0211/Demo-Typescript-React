export const loginUser = async (username: string, password: string) => {
    const users = [
        { username: 'abc', password: 'abc' },
        { username: 'user2', password: 'password2' },
    ];

    const user = users.find((user) => user.username === username && user.password === password);

    return user ? { success: true } : { success: false };
};
