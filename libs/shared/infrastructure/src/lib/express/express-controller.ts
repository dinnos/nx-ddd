import { Request, Response } from 'express';

export abstract class ExpressController {
  abstract run(req: Request, res: Response): Promise<void>;
}
