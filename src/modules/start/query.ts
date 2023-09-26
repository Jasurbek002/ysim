export const UPDATED_ON:string = `
select service_procedure.create_zip_offline_online_true();
`

export const UPDATED_OFF:string = `
select service_procedure.create_zip_offline_online_false();
`

export const GET_UPDATE_STATUS:string = `
select service_procedure.get_zip_offline_online();
`