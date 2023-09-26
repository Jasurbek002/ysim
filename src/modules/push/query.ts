export const GET_ALL_ORDERS_QUERY: string = `
select service_procedure.get_all_package_counter_month();
`;

export const ENEBLE_PUSH: string = `
call service_procedure.added_have_notification_to_package_counter($1,$2);
`;
