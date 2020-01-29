import { HttpHeaders } from '@angular/common/http';

export class GitHeader {
   public static appheader = {
        headers: new HttpHeaders({ 'Authorization': 'Token 75bcd64405f6366c4bcb36157ae5c8588cab8380' })
      };
}
