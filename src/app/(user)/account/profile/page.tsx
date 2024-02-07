import { UpdateButton } from "@/components/account/UpdateButton";
import { SignOutButton } from "@/components/account/SignOutButton";

export async function generateMetadata() {
  return {
    title: `Profile | Ecommerce Template`,
  };
}

const ProfilePage = () => {
  return (
    <div className="pt-12">
      <div className="max-w-screen-md	p-3.5	flex justify-between flex-col border border-solid border-border-primary rounded gap-5	bg-background-secondary">
        <UpdateButton
          text="name"
        />

        <UpdateButton
          text="email"
        />

        <UpdateButton
          text="phone"
        />
      </div>

      <SignOutButton />
    </div>
  );
}

export default ProfilePage;