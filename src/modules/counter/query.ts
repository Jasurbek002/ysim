export const CREATE_USSD_COUNTER:string = `
select service_procedure.create_package_counter($1);
`