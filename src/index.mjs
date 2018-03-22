import db from './db'

async function main(){
  try {
    conn = await db.createConnection()
  } catch (error) {
    console.log(error)
  }
}
main()