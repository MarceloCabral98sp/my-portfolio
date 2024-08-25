type ApiResponse = {
    success: boolean;
    message?: string;
    [key: string]: any; // Permite propriedades adicionais se necessário
};

export const sendEmail = async (formData: FormData): Promise<ApiResponse> => {
    formData.append('access_key', '25bbe40d-40ce-4962-8d69-34c80d03757e');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: json
    });

    return response.json();
};