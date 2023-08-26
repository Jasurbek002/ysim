export const GET_ALL_PACKAGES: string = `
select service_procedure.get_all_category_paket()
`;

export const GET_ONE_NET_QUERY: string = `
select service_procedure.get_one_paket($1)
`;


