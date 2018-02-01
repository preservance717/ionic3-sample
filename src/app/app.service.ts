/**
 * Created by gaole on 2018/1/30.
 */
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Injectable} from "@angular/core";

@Injectable()
export class AppService{
  constructor(private sqlite: SQLite) { }

  initDB(location){
    this.sqlite.create({
      name: 'data.db',
      location: location
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table q_user(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}
