export class Review {
  constructor(
    private id: string,
    private userId: string,
    private activityId: string,
    private message: string,
    private rating: number
  ) {}
}
