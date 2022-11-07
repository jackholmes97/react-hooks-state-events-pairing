import React from "react"
import Card from "./Card"

export default function Comments({comments, commDisplay}) {

    return (
        <div class={commDisplay ? "displayed" : "hidden"}>
            <h2>{comments.length} Comments</h2>
            {comments.map((comment) => {
                return <Card key={comment.id} user={comment.user} comm={comment.comment} />
            })}
        </div>
    )
}