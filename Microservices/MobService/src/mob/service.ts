export class MobService {
  public async getPaid(userId: string | undefined): Promise<Ticket[]> {
    const query = {
      text: queries.selectPaidTickets,
      values: [userId],
    };

    const { rows } = await pool.query(query);
    const tickets = await this.rowToTicket(rows);
    return tickets;
  }
}
