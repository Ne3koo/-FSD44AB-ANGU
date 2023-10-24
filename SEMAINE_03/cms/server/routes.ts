import { Router } from "express";
import passportInstance from './auth';


const router: Router = Router();

router.post('/login',
    (req, res, next) => {
        passportInstance.authenticate('local', (err: any, user: Express.User, data:any) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (!user) {
                return res.json({success: false, message: "Nom d'utilisateur ou mot de passe incorrect"});
            }
            req.login(user, loginErr => {
                if (loginErr) {
                  return next(loginErr);
                }
                return res.json({ success : true, message : "Connexion établie", user: req.user });
            }); 
        })(req, res, next);
    }
);

router.post('/signup',
    (req, res, next) => {
        passportInstance.authenticate('local-signup', (err: any, user: Express.User, data:any) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (user) {
                return res.json({success : true, message: "Utilisateur enregistré"});
            } else {
                return res.json({success: false, ...data});
            }
        })(req, res, next);
    }
);

export default router;