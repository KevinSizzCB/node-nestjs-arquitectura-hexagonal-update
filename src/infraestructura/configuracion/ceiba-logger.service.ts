import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger extends Logger {
  private _context: string;

  public customError(error: Error) {
    super.error(`${error.name}: ${error.message}.`, error.stack, this._context);
  }

  public setContext(contextName: string) {
    this._context = contextName;
  }
}
