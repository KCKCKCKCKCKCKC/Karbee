import { Button, ButtonProps } from '@mantine/core';
import { FaTwitter } from "react-icons/fa";

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Button
      leftSection={<FaTwitter style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
}