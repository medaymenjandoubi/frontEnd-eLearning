import { Card, Badge } from "antd";
import Link from "next/link";
import {currencyFormatter} from "../../utils/helpers"
const {Meta} = Card

const CourseCard = ({course}) => {
    const{name,instructor,price,image,slug,paid,category}= course
    const imageUrl = image && image.Location;
    return (
        <Link href={`/course/${slug}`} >
                      <Card
        className="mb-4 dark-theme-hover"
        cover={
          imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
            ></img>
          ) : (
            <img
            src={"/course.png"}
            alt={name}
            style={{ height: '200px', objectFit: 'contain', borderRadius: '10px' }}
          ></img>
          )
        }
      >
                    <h3 className="font-weight-bold">{name}</h3>
                    <p style={{ textTransform:"capitalize"}}>{instructor.name}</p>
                    <Badge count={category} style={{ backgroundColor: 'blue', color: '#FFFFFF',borderColor: "blue" }}></Badge>
                    <h4 className="" style={{}}>{paid ? currencyFormatter({
                        amount: price,
                        currency: "eur",
                    }) : "Free" }</h4>
                </Card>
        </Link>
    )
}
export default CourseCard;