import { FirebaseError } from "firebase";

export default function isFirebaseError(error: unknown): error is FirebaseError {
  return (error as FirebaseError) !== undefined;
}
