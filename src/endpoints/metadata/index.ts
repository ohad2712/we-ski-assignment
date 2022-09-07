import { Response, Router } from 'express';
import sites from '../../fixtures/sites';

const router = Router();

interface Metadata {
  sites: Object;
  groupSizes: {
      value: Number;
      label: String;
  }[]
}

const getMetadata = (): Metadata => ({
  sites,
  groupSizes: Array.from({ length: 10 }).map((_, i) => ({ 
    value: i + 1, 
    label: `${ i + 1 } People`,
  }))
});

router.get('/', (req, res: Response) => {
  try {
    const response = getMetadata();

    res.send(response);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

export default router;
