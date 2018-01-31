/**
 * Created by gaole on 2018/1/30.
 */
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Injectable} from "@angular/core";

@Injectable()
export class AppService{
  constructor(private sqlite: SQLite) { }

  initDB(){
    this.sqlite.create({
      name: 'data.db',
      location: 'android/data/gaole'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table danceMoves(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}
