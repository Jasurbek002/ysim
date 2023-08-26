export const GET_ALL_TARIFF_TYPEING_QUERY:string = `
select service_procedure.get_all_tariff_typing()
`

export const GET_ALL_TARIFFS_QUERY:string = `
select service_procedure.get_all_category_tariff()
`

export const GET_ONE_TARIFF_QUERY:string = `
select service_procedure.get_one_tariff($1)
`